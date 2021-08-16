import { IEntity } from "./entity.interface";

export interface IRepository<Entity extends IEntity<EntityId>, EntityId> {
  findAll(): Promise<Entity[]>;
}
