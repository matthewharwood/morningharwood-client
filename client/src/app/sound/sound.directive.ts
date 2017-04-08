/**
 * Created by matth on 2/26/2017.
 */

/**
 *  @whatItDoes A directive that can take string input that is used as a selection to match and play a sound.
 *  @example <a [sound]="[Event.CLICK, Sound.HEARTBEAT]"></a>
 *  @USAGE
 *
 *  @ngModule()
 *  imports: [
 *   SoundModule
 *  ]
 *
 *  @Directive()
 *  export class SoundDirective(){
 *    @Input(SoundDirective) sound:Sound;
 *
 *
 */
