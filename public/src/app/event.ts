export class Event {
  constructor(
    public id: number = 1,
      public event_title: string = '',
    public event_description: string = '',
    public event_image: string = '',
    public event_choice_1: string = '',
    public event_choice_2: string = '',
    public stress1: number = 0,
    public friends1: number = 0,
    public cigaretes1: number = 0,
    public alcochol1: number = 0,
    public drugs1: number = 0,
    public stress2: number = 0,
    public friends2: number = 0,
    public cigaretes2: number = 0,
    public alcochol2: number = 0,
    public drugs2: number = 0
    ) {

  }
}
