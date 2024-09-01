import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import type { Prisma } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { buildPagination } from 'src/helpers/pagination.helper';

@Injectable()
export class ProductsService {
  private readonly select: Prisma.ProductSelect = {
    id: true,
    name: true,
    price: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: createProductDto,
      select: this.select,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    const where: Prisma.ProductWhereInput = { available: true };

    const dataQuery = this.prismaService.product.findMany({
      where,
      take: limit,
      skip: (page - 1) * limit,
      select: this.select,
    });

    const totalQuery = this.prismaService.product.count({ where });

    const [data, total] = await this.prismaService.$transaction([
      dataQuery,
      totalQuery,
    ]);

    return buildPagination(data, total, page, limit);
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id, available: true },
      select: this.select,
    });

    if (!product) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: `Product with id: ${id} not found`,
      });
    }

    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const { id, ...data } = updateProductDto;

    await this.findOne(id);

    return this.prismaService.product.update({
      where: { id },
      data,
      select: this.select,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.product.update({
      where: { id },
      data: { available: false },
    });
  }
}
