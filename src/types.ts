const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaProjet {
id?: string;
nom_projet: string;
prix: number;
favori: boolean;
image: string;
nbrChambres: number;
nbrSDB: number;
adresse: string;
surface: string;
}