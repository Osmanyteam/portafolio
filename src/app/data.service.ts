import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Project {
  name: string;
  description: string;
  enterprise: { name: string; period: string; position: string; };
  images: string[] | undefined;
  links: { text: string; href: string }[] | undefined;
  technology: string[];
}

export interface PartSkillType {
  name: string;
  projects: Project[];
}

export interface SkillType {
  parts: Array<PartSkillType>;
  name: string;
}

export type SkillsType = Array<SkillType>;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getSkills(): Observable<SkillsType> {
    const skills: SkillsType = [
      {
        name: 'Backend',
        parts: [{
          name: 'Deno',
          projects: [
            {
              name: 'Road',
              description: `
              Creemos que websocket es una increíble tecnología que en la mayoría de las
              casos cumple con lo necesario para crear increíbles api,
              pero uno de sus inconvenientes es no tener un estándar en las que
              permita hacer fácilmente la integración por parte de los desarrolladores,
              en cambio con http se puede crear url descriptivas que ayudan a entender cuál es
              su funcionamiento esto y otras cosas han sido más que suficiente para crear increíbles
              API REST, nuestra idea es cambiar las url o endpoints por los llamados mensajes de
              websockets y crear un estándar fácil de entender e integrar no solo para desarrolladores
              si no para personas no tan familiarizadas con la programación, también proveer herramientas
              que los desarrolladores puedan usar para crear aplicaciones con datos actualizados en el
              momento sin tener que empezar de cero y tener una librería que garantice todas las partes
              fundamentales que requiere una API REST.
              `,
              enterprise: {
                name: 'Projecto Personal',
                period: '2020-2021',
                position: 'developer'
              },
              links: [
                {
                  href: 'htttp://google.com',
                  text: 'buscador'
                },
                {
                  // tslint:disable-next-line:max-line-length
                  href: 'https://denocode.com/?gclid=Cj0KCQjwlN32BRCCARIsADZ-J4v0n4_d46_uvZrJVcPUgvZPtnpl6imycGyfNN2xwgYyL5x-19W2HZ0aAvmpEALw_wcB',
                  text: 'deno exmaple'
                }
              ],
              technology: ['deno', 'typescript', 'websocket', 'API REST'],
              images: [
                'https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/05/deno-1-0-what-you-need-to-know-1.png?fit=730%2C487&ssl=1',
                'https://miro.medium.com/max/2560/1*GLUQlHX7Ys19WAMh62Htzw.jpeg',
                'https://miro.medium.com/max/2560/1*GzfZZNWFeQ3kKJsKeKy7_A.jpeg',
                'https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/05/deno-1-0-what-you-need-to-know-1.png?fit=730%2C487&ssl=1',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbnH8z4M2WQF6-owyuE4_YURwusGMf3WL-1yozg1nWKcYJJmr&usqp=CAU'
              ]
            }
          ]
        }]
      }
    ];

    return of(skills);
  }
}
