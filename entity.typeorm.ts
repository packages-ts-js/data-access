import { BaseEntity, PrimaryColumn } from "typeorm";
import { IEntity } from "./entity.interface";

export class TypeORMEntity<EntityId> extends BaseEntity implements IEntity<EntityId> {
    @PrimaryColumn()
    id: EntityId;
}
