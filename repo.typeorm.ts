import { Repository } from 'typeorm';
import { TypeORMEntity } from './entity.typeorm';
import { IRepository } from './repo.interface';

export class TypeORMRepo<Entity extends TypeORMEntity<EntityId>, EntityId>
  implements IRepository<TypeORMEntity<EntityId>, EntityId>
{
  constructor(private repo: Repository<Entity>) {}

  findAll(): Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }
}
