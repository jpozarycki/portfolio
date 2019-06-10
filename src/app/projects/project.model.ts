export class Project {
  title: string
  pictureUrl: string;
  description: string;
  usedTechnologies: string[];
  webLink?: string;
  gitLink: string;

  constructor(title: string, pictureUrl: string, description: string, usedTechnologies: string[], gitLink: string, webLink?: string) {
    this.title = title;
    this.description = description;
    this.pictureUrl = pictureUrl;
    this.usedTechnologies = usedTechnologies;
    this.webLink = webLink;
    this.gitLink = gitLink;
  }

}
