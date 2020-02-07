export interface IMonster {
  id: number;
  name: string;
  sizeTypeAlignment?: string;
  armorClass?: string;
  hitPointsAndDice?: string;
  speed?: string;
  strength?: string;
  dexterity?: string;
  constitution?: string;
  intelligence?: string;
  wisdom?: string;
  charisma?: string;
  skills?: string;
  damageImmunities?: string;
  conditionImmunities?: string;
  senses?: string;
  languages?: string;
  challenge?: string;
  traits?: ITrait[];
  actions?: IAction[];
}

export interface ITrait {
  name: string;
  description?: string;
}

export interface IAction {
  name: string;
  description?: string;
}