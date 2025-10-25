setcpm(100/4)

const chords=
  note(`
  <
  [a2,a3,c3,e3,a4] [f2,f3,c4,f4,a4] [c1,c2,c3,e3,g3] [b1,b2,b3,d3,g#3]
  >
  `)
  .slow(2)
  .s("piano")
  .speed(1.001)
  .gain(.6)
  .room(1)
  .distort(.5)

const mel=
  note(`
  <
  [a4@8 b4@4 c5@4] [a4@8 b4@4 c5@4] [g4@8 b4@4 c5@4] [g#4@8 a4@4 b4@4]
  >
  `.superimpose(x => x.add("[12]"))
  )
  .room(4)
  .gain(1)
  .delay(.5)
  .slow(2)
  .speed(1.001)
  .s("piano")

const metro = s("white*4").gain(.1).clip(.05)

const strings = note(`
<
[a2,e3,a3] [f2,c3,f3] [c2,g2,c3] [b2,d3,b3] 
>
`)
  .s("supersaw")
  .lpenv(2)
  .lpf(sine.range(500,5000).slow(4))
  .room(1)
  .detune(.2)
  .phaser(.8)
  .slow(2)
  .gain(.5)



const strings_high = note(`
<
[e4@8 a4@4 c5@4] [a4] [g4@8 c5@4 d5@4] [b4]
>
`.add(12))
  .struct(`
  <
  [x - - - - - - - x - - - x - - -]
  [x - - - - - - - - - - - - - - -]
  [x - - - - - - - x - - - x - - -]
  [x - - - - - - - - - - - - - - -]
  >
  
  `)
  .clip(
    `
  <
  [8 - - - - - - - 4 - - - 4 - - -]
  [16 - - - - - - - - - - - - - - -]
  [8 - - - - - - - 4 - - - 4 - - -]
  [16 - - - - - - - - - - - - - - -]
  >
  
  `
  )
  .s("gm_string_ensemble_1")
  .slow(2)
  .room(10)
  //.vib(.05)
  .bpf(1000)
  .gain(.2)

const strings_high_end = note(`
<
[c4 b3 a3 e4 - c4 b3 a3 e4 - - - - - - -]
[c4 b3 a3 e4 - c4 b3 a3 e4 - - - d4 - - -]
[c4 b3 a3 f4 - c4 b3 a3 f4 - - - - - - -]
[c4 b3 a3 f4 - c4 b3 a3 f4 - - - g4 - - -]
[e4 d3 c4 g3 - e4 d3 c4 g3 - - - - - - -]
[e4 d3 c4 g3 - e4 d3 c4 g3 - - - - - - -]
[c4 b3 a3 e3 - c4 b3 a3 e3 - - - - - - -]
[- e3 f3 g3 a3 - e3 f3 g3 a3 b3 c4 d3 e3 - - ]

>
`.add(24))
  .struct(`
  <
  [x x x x - x x x x - - - - - - -]
  [x x x x - x x x x - - - x - - -]
  [x x x x - x x x x - - - - - - -]
  [x x x x - x x x x - - - x - - -]
  [x x x x - x x x x - - - - - - -]
  [x x x x - x x x x - - - - - - -]
  [x x x x - x x x x - - - - - - -]
  [- x x x x - x x x x x x x x - -]
  >
  
  `)
    .clip(`
  <
  [1 1 1 2 - 1 1 1 3 - - - - - - -]
  [x x x 2 - x x x 2 - - - 4 - - -]
  [x x x 2 - x x x 3 - - - - - - -]
  [x x x 2 - x x x 3 - - - 4 - - -]
  [x x x 2 - x x x 4 - - - - - - -]
  [x x x 2 - x x x 4 - - - - - - -]
  [x x x 2 - x x x 3 - - - - - - -]
  [- x x x 1.5 - x x x x x x x 2 - -]
  >
  `)
  .s("gm_tremolo_strings")
  .room(5)
  .sus(5)
  //.bpf(3000)
  .gain(rand.range(.2, .5))
  .pan(rand.range(.3, .6))

const drums = s("[bd:1]*2,[- sd:1]").fast(2).gain(.5).room(.5).duck(4).lpf(7000)
const highhats = s("white*16").gain(rand.range(.05,.2))
  .clip(rand.range(.05,.15)).rel(.05).orbit(4)

const bass = note(`
<
[a]
[a@2 -@4 a@2 -@4 a g f e]
[f]
[f@8 -@4 f@2 g@2]
[c4]
[c4@8 -@4 c4@2 d4@2]
[e4@1 e3@15]
[e3@8 -@4 e3@2 g@2]
>
`.sub(24))
  .struct(`
  <
  [x x - - - - x x - - - - x x - -]
  [x x - - - - x x - - - - x x x x]
  [x x - - - - x x - - - - - - - -]
  [x x - - - - x x - - - - x x x x]
  [x x - - - - x x - - - - - - - -]
  [x x - - - - x x - - - - x x x x]
  [x x - - - - x x - - - - - - - -]
  [x x - - - - x x - - - - x x x x]
  >
  `)
  .s("saw")
  .rel(.01)
  .dec(.2)
  .gain(2)
  .clip(.7)
  .room(1.5)
  .delay(.1)
  .lpf(300)
  .lpenv(1)
  .distort(.2)
 

const arp = note(`
  <
  [c3 d3 e3 f3 c4 b3 a3 g3]!4 [c3 f3 g3 a3 b3 c4 d4 e4]!4
  >
  `.add(12)
  )
  .fast(2)
  .delay(.2)
  .s("supersaw")
  .detune(.2)
  //.phaser(4)
  .room(.5)
  .dec(.2)
  //.rel(.07)
  .att(.01)
  .pan(sine.range(.2, .7).slow(2))
  .lpf(800)
  .gain(.5)

stack(
  mel,
  chords,
  strings,
  drums,
  highhats,
  bass,
  strings_high,
  strings_high_end,
  arp,
) 

