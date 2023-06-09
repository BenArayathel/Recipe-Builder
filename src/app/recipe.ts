export class Recipe {
    title: string;
    ingredients: string[];
    instructions: string[];
    archived: boolean = false;

    constructor(title: string, ingredients: string[], instructions: string[]){
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    toString(): string {
        return `${this.title}`;
    }
}