export interface IPages{
    id: number,
    name: string,
    link: string,
    className: string,
}

export const Pages: IPages[] = [{name:'Все котики',link:'/', className:'link_all',id: 1}
                            ,{name:'Любимые котики', link:'/favorite',className:'link_favorite', id: 2}]