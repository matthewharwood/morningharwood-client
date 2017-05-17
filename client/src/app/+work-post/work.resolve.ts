/**
 * Created by matty on 4/30/17.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { POST_TABLE} from './work-post.content';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/pluck';


const PARA = `What do people do when they like
something? Of course, the answer to this
question depends on what it is that they
like, whether it is physical, emotional or
even digital. In recent years and with the
  emergence of Facebook, liking something
has taken on a completely new meaning
and can be something as simple as
    pressing a button next to a picture. Surely
liking something today requires less of a
commitment and action than ever before.
    This is the motivation that we use to base
the concept of our artwork.
    First, when people like something in the
real world, we end up losing something
along with it – be it time, money or
emotion, to name a few. For this reason,
    people are more ready to like something
when there is little to no investment,
    such as pressing the “Like” button
on Facebook. This is where the line is
drawn between the real world and the
digital world. With Facebook, “Liking”
has taken on an entirely new meaning,
    where users of the social networking
service press the “Like” button to share
content and interests with their friends.
    In liking something on Facebook, there
is no risk involved and definitely a lack
of investment. Through this, we believe
that the “Like” button on Facebook has
become mundane and in many ways
insignificant.
    Secondly, we simply wanted to make
people’s days better. We noticed that
sometimes when we are on their own,
    we often become preoccupied with our
  agendas and troubles, often making us
sad. Our inspiration comes from Juan
Mann, an artist who was feeling down on
a particular day until he received a random
hug from a stranger. The gesture of a hug
made Juan Mann’s day so much better
and so much more significant that he was
inspired to start the Free Hugs Campaign.
    We wanted to replicate this very feeling
that is so significant to somebody and
recreate with something as insignificant
  as liking something on Facebook.
    We took these two ideas and merged
them together. Clicking the “Like” button
on somebody’s Facebook page does not
do as much for a person as something like
a hug. Simple gestures can go a long way
because of the physical investment that
is required in one. This investment is what
we hope to use – to replicate physical
actions and feelings and translate it into
the digital world by making something
insignificant such as a “Like” in Facebook
into something that is meaningful and
significant to somebody.◊`;

@Injectable()
export class WorkPostResolve implements Resolve<any> {

  constructor() {

  }

  resolve(route: ActivatedRouteSnapshot): any {
    // then replace dynamic with this.someService.getData(route.params.id)
    return Observable.of(
        Observable.concat(
            Observable.of(POST_TABLE.data.filter(post => post.slug === route.params.slug)),
            Observable.timer(3000)
                .switchMapTo(Observable.of([{title: 'Stanley a previsualization tool for Nike Jordan', paragraph: PARA}]))
        )
    );
  }
}