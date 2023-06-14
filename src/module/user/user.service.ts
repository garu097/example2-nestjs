import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

    create(dto: CreateUserDto) {
        const { email, password } = dto
        const user = this.userRepository.create({ email, password })
        return this.userRepository.save(user)
    }

    findOne(user: FindOptionsWhere<UserEntity>) {
        return this.userRepository.findOneBy(user)
    }

    find(key: string) {
        return this.userRepository.find({
            where: key ? [
                { id: isNaN(+key) ? undefined : +key },
                { name:  ILike(`%${key}%`) },
                { email: ILike(`%${key}%`) }
            ] : [],
            order: {
                id: "ASC"
            }
        })
    }

    async update(id: number, attr: Partial<UserEntity>) {
        const user = await this.findOne({ id })
        if(!user) {
            throw new NotFoundException()
        }
        Object.assign(user, attr)
        return this.userRepository.save(user)
    }

    async remove(id: number) {
        const user = await this.findOne({ id })
        if(!user) {
            throw new NotFoundException()
        }
        return this.userRepository.remove(user)
    }
}
