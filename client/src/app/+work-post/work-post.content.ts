/**
 * Created by matth on 2/20/2017.
 */
import { WorkPosts } from '../+work/work.content';

function randomBlokk(count) {
  let i = 0;
  let blokk = '';
  const addSpace = () =>  !(Math.random() >= 0.5) ? '' : ' ';
  while (i < count) {
    blokk = `${blokk}${addSpace()}▄${addSpace()}`;
    ++i;
  }

  return blokk;
}

export const POST_TABLE:WorkPosts = {
  data: [
    {
      id: 0,
      title: '▄▄▄▄ ▄▄ ▄▄ ▄▄▄ ▄ ▄▄ ▄▄ ▄ ▄ ▄ ▄▄ ▄▄ ▄ ▄ ▄ ▄▄ ▄▄ ▄ ',
      category: 'Web Application',
      paragraph: `${randomBlokk(1000)}`,
      slug: 'stanley',

    }
  ]
};
