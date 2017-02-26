/**
 * Created by matth on 2/20/2017.
 */
// TODO (mharwood) Refactor this WorkPost
export interface WorkPost {
  id: number,
  title: string,
  categories: Array<string>,
  paragraph: string,
  slug: string,
  overview?: Array<any>,
}

export interface WorkPosts {
  data: Array<WorkPost>
}

export const POST_TABLE:WorkPosts = {
  data: [
    {
      id: 0,
      title: 'Nike Jordan Editor',
      categories: ['Web Application'],
      paragraph: 'Worked collaboratively with an Art Director, Visual Designer & another Creative Developer to create a tool that unifies what was otherwise a fragmented process on Nike Jordan.',
      slug: 'stanley',
      overview: [
        {
          title: 'What it is',
          subtitle: '',
          description: 'Stanley is a CMS tool that affords content authors, art directors, designers, client or pretty much anyone to work, collaboratively, in real time to curate pages for nike/jordan.com.'
        },
        {
          title: 'My roles',
          subtitle: '',
          description: 'Co-UxD, Co-Visual Designer, Agile Scrum master, & frontend lead.'
        },
        {
          title: 'Why is it important?',
          subtitle: '',
          description: 'Stanley opens up possibilities for AKQA to be more involved & more hands-on.The Stanley editor bridged a gap between client and designer and served as a collaborative pre-visualization tool.'
        }
      ]
    }, {
      id: 1,
      title: 'Target Weekly Ad',
      categories: ['Web Application'],
      paragraph: 'Worked on a team of 15 to imagine, create, and maintain the next iteration of Target\'s Weekly Digital Circular.',
      slug: 'target-weekly-ad',
      overview: [
        {
          title: 'What it is',
          subtitle: '4 months production time.',
          description: 'Full redesign and rearchitecture of target\'s Weekly Ad. Client requested for a fully responsive modern web application that can also run on IE8.'
        },
        {
          title: 'My roles',
          subtitle: 'Create Developer',
          description: 'UxD, Visual Designer, & Frontend Developer'
        },
        {
          title: 'Why is it important?',
          subtitle: '40m impression in November 14\' alone.',
          description: 'This application was to be showcased for blackfriday. These deadlines are the most important deadlines for all retail stores.'
        }
      ]
    }, {
      id: 2,
      title: 'Google Pathfinder',
      categories: ['Web Application'],
      paragraph: '',
      slug: 'google-pathfinder'
    }, {
      id: 3,
      title: 'AKQA Insights',
      categories: ['Internet of Things'],
      paragraph: 'It\'s like TED talk for AKQA. Every year AKQA does a global event called insights. For this event, AKQA invites all of their c-level clients into one room to watch insightful presentations.',
      slug: 'stanley',
      overview: [
        {
          title: 'What it is',
          subtitle: '3 months production time',
          description: 'A critical & speculative design piece that shed light on our inevitable connected future.'
        },
        {
          title: 'My roles',
          subtitle: 'Keynote speaker, Inventor, & Creator',
          description: 'UxD, Visual Designer, & Frontend Developer'
        },
        {
          title: 'Why is it important?',
          subtitle: '40m impression in November 14\' alone.',
          description: 'This application was to be showcased for black friday. These deadlines are the most important deadlines for all retail stores.'
        }
      ]
    }, {
      id: 4,
      title: 'Languages of Google Translate',
      categories: ['Web Site'],
      paragraph: '',
      slug: 'target-weekly-ad'
    }, {
      id: 5,
      title: 'Pillow +',
      categories: ['Art Installation'],
      paragraph: 'Liking something today requires less of a commitment and action than ever before. Pillow + is a physical pillow, a physical interaction, for a digital "like" on facebook.',
      slug: 'facebook-pillow',
      overview: [
        {
          title: 'What it is',
          subtitle: 'My first attempt at art.',
          description: 'An art piece that aims to remind people that love should take a bit more effort.'
        },
        {
          title: 'My roles',
          subtitle: 'Creative Technologist, Artist',
          description: 'Java Developer, Installation/Experience design'
        },
        {
          title: 'Why is it important?',
          subtitle: 'Invited to bring our project to Maker\'s fair 2011.',
          description: 'Pillow + generated a lot of positive feedback from the art shows attendees.'
        }
      ]
    }
  ]
};
