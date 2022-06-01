import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Column("varchar")
  name: String;

  @Column("varchar")
  description: String;

  @Column("varchar")
  category: String;

  @Column("varchar")
  contact: String;

  @Column("double precision")
  latitude: Number;

  @Column("double precision")
  longitude: Number;
}
