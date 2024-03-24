export class Project {
  constructor(
    public name: string,
    public tags: string[],
    public image: string,
    public link?: string
  ) {}
}
