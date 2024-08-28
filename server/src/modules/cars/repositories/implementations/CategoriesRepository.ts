import { Category } from '../../entities/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository'
import { PrismaService } from './prisma.service'

export class CategoriesRepository implements ICategoriesRepository {
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository

  constructor(private prisma: PrismaService) {}

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository(
        new PrismaService(),
      )
    }
    return CategoriesRepository.INSTANCE
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    await this.prisma.category.create({
      data: {
        name,
        description,
      },
    })
  }

  async list(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.prisma.category.findFirst({
      where: {
        name,
      },
    })

    return category
  }
}
