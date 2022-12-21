

export class Recipe {
    public name: string;
    public decsription: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.decsription = desc;
        this.imagePath = imagePath;

    }
}