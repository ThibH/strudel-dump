setcpm(35)

$:
  note(`<
  [a4 c#4 f#4 c#4]!3 [a4@2 c#4@2 f#4 a4 c#4 f#4]
  [a4 c#4 f#4 c#4]!3 [a4@2 c#4@2 f#4 a4 c#4 f#4]
  [b4 c#4 f#4 c#4]!3 [b4@2 c#4@2 f#4 b4 c#4 f#4]
  [b4 c#4 f#4 c#4]!3 [b4@2 c#4@2 f#4 b4 c#4 f#4]
  [g#4 c#4 f4 c#4]!3 [b4@2 c#4@2 f4 g#4 b4 f4]
      >`)
    .fast(2)
    .gain(rand.range(.5,1).rib(3,8))
    ._punchcard()
  .s("saw")
  .lpf(350)
  .lpenv(2)
  .clip(.9)
  .adsr(".02:1:0:0.1")
  .delay(.2).room(1)
      


