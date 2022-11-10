import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MockCategory {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  templates: Record<string, any>;
}
