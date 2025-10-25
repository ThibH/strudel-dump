samples({
  vocals: 'http://localhost:5432/vocals.wav'
});

const clav = n("0 1 2 [1 ~]  0 [1 ~] 2 0".add("<[2@4 3@8 4@8]>")).fast(2)
  .chord("<C Am F <G Em>>").voicing()
  .s("gm_clavinet")
  .attack(0.02).release(0.18).gain(1).pan(.2)
  .room(1)
  .delay(0.25).delaytime(0.125).delayfeedback(0.3)


const guit = note("<c4 <g4 c5> [<g5 f4> g4 f4 e4 d4]>".add(12))
  .s("gm_overdriven_guitar")
  .delay(.3)
  //.room(2)
  //.size(5)
  //.phaser(2)
  .gain(.5)

const voc = s("vocals").scrub("<.21*[4 | 2] .6 .8>").clip("<[.7 | .8] .9 .5>").almostAlways(ply(2))
  .room(10)
  .size(1.3)
  .speed(1.2)
  //.delay(.4)
  .bpf(700)
  .gain(1.3)

const org = chord("<C Am F <G Em>>")
  .room(1)
  .voicing()
  .att(0.25)
  .s("gm_rock_organ")

const kick = s("<[bd:2 bd:2 bd:2 bd:2] [bd:2 bd:2 bd:2 bd:2]>")
  .duck(3).gain(0.4)

const snare = s("[- sd:2]*2")
  .room("2")
  .delay(.3)
  .gain("<.4>")

const ride = s("[- oh:2]*4").room(2).delay(.7).gain(.7).pan(sine.range(.3, .6))

const hihat = s("hh*16").gain(rand.range(.2,.7)).pan(rand.range(.2,.7))

const pulse = n("0,<4,7,9>".sub(2))
  .scale("<C:major A:minor F:major G:major>")
  .s("supersaw")
  .clip(.7)
  .rel(.05)
  .delay(.2)
  .seg(16)
  .lpf(sine.range(500,7000).slow(8))
  .orbit(3)
  .gain(.6)


const plucks1 = n("<0 1 2 1  0 1 2 0>*2".add(9)).fast(6)
  .chord("<C Am F <G Em>>").voicing()
  .s("gm_clavinet")
  .lpf(800)
  .room(0.6)
 
const plucks2 = n("0 1 [2 2] 1  0 1 [2 ~] 0".add(7)).fast(2)
  .chord("<C Am F <G Em>>").voicing()
  .s("gm_clavinet")
  .attack(0.015).release(0.17).gain(0.75).pan(sine.range(.3, .6))
  .room(1)
  .delay(0.6).delaytime(0.125).delayfeedback(0.3)
  .lpf(sine.range(300, 3000).slow(8))

const melo = note("<[e5!3 [e5 e5]] [[e5 <f5 b4>] <f5!3 [b4 f5]>]>")
  .s("saw")
  .segment(16)
  .clip(rand.range(.3, .4).fast(4))
  .att(0.01)
  .rel(.5)
  .room(1)
  .gain(1.5)

const plucksg = slider(0.193,0,1)

const dhigh = stack(
  hihat,
  ride.lpf(slider(8000,500,8000)),
  snare.room(slider(3.092,2,5)),
)

const melodies = stack(
  plucks1.gain(plucksg),
  plucks2.gain(plucksg), 
  clav,
)

stack(
  org,
  kick.lpf(slider(10000,200,10000)),
  dhigh,
  pulse.lpf(slider(10000,100,10000)).room(slider(0.6125,.5,3)),
  //voc.lpf(slider(3579,100,5000)),
  //melo.lpf(slider(618.4,200,1000)),
  melodies
)