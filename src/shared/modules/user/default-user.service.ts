import { DocumentType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user-service.interface.js';
import { UserEntity, UserModel } from './user.entity.js';

export class DefaultUserService implements UserService {
  public async create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    user.setPassword(dto.password, salt);

    return UserModel.create(user);
  }

  findByEmail(email: string): Promise<DocumentType<UserEntity> | null> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<DocumentType<UserEntity> | null> {
    throw new Error('Method not implemented.');
  }

  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    throw new Error('Method not implemented.');
  }

}
