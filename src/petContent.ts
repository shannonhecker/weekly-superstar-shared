// Per-chain content pool — facts + light jokes rotated on the pet detail
// screen on each visit. 26 chains × 8 items = 208 items.
//
// Authoring rules (enforced by review, not by tests):
//   - Every item ≤12 words.
//   - Flesch-Kincaid grade level ≤6 (kid-readable).
//   - `minAge` honest — bumps when wordplay needs older comprehension.
//   - No em-dashes / en-dashes in display text. Period split or comma pair.
//   - Mix of facts (factually accurate) and jokes (kid-safe puns).
//
// Reader: pick at random from items where `minAge <= kid.age`. Memoise a
// "seen" set per session to avoid repeats until the eligible pool is
// exhausted — see `lib/petFacts.ts` in the iOS app.

export type PetChainFact = {
  text: string
  minAge: number
}

export const PET_CHAIN_FACTS: Record<string, PetChainFact[]> = {
  cats: [
    { text: 'Cats can rotate their ears 180 degrees.', minAge: 5 },
    { text: 'A group of cats is called a clowder.', minAge: 6 },
    { text: 'Cats sleep about 16 hours each day.', minAge: 5 },
    { text: 'Tigers are the largest cats in the world.', minAge: 5 },
    { text: 'Lions live together in groups called prides.', minAge: 6 },
    { text: 'What kind of cat loves swimming? A purr-mit.', minAge: 7 },
    { text: 'Why did the cat watch the screen? For the mouse.', minAge: 7 },
    { text: 'Cats can jump up to six times their length.', minAge: 6 },
  ],
  dogs: [
    { text: 'Puppies are born with their eyes shut tight.', minAge: 5 },
    { text: 'Dogs can smell things humans cannot.', minAge: 4 },
    { text: 'Foxes can leap over six feet in the air.', minAge: 6 },
    { text: 'Wolves howl to talk to their pack.', minAge: 5 },
    { text: 'Dogs sweat through their paws, not their skin.', minAge: 6 },
    { text: "What's a puppy's favorite drink? Pup-corn juice.", minAge: 7 },
    { text: 'Why did the dog sit in shade? To stay a cool pup.', minAge: 7 },
    { text: 'A puppy can have over 200 teeth grow in.', minAge: 6 },
  ],
  birds: [
    { text: 'Baby chicks chirp before they hatch from the egg.', minAge: 5 },
    { text: 'A fledgling is a baby bird learning to fly.', minAge: 5 },
    { text: 'Ducks have waterproof feathers.', minAge: 4 },
    { text: 'Swans can live up to 30 years.', minAge: 6 },
    { text: 'Some birds fly across the whole world.', minAge: 5 },
    { text: 'What does a duck say after a joke? Quack me up.', minAge: 7 },
    { text: 'Why did the chick cross the playground? For the slide.', minAge: 6 },
    { text: 'A group of swans is called a bevy.', minAge: 7 },
  ],
  dinos: [
    { text: 'Dinosaurs lived over 65 million years ago.', minAge: 6 },
    { text: 'T-rex had teeth as long as bananas.', minAge: 5 },
    { text: 'Crocodiles can hold their breath for one hour.', minAge: 6 },
    { text: 'Lizards can drop their tails to escape danger.', minAge: 6 },
    { text: 'Dragons live only in stories and dreams.', minAge: 5 },
    { text: 'What do you call a sleeping dino? A dino-snore.', minAge: 6 },
    { text: "Why did the T-rex eat raw meat? Tiny arms can't cook.", minAge: 8 },
    { text: 'Some lizards can change their skin color.', minAge: 5 },
  ],
  sea: [
    { text: 'Dolphins sleep with one eye open.', minAge: 5 },
    { text: 'Whales sing songs underwater.', minAge: 4 },
    { text: 'Sharks have been around for 400 million years.', minAge: 7 },
    { text: "A blue whale's heart is huge, like a small car.", minAge: 7 },
    { text: 'Fish breathe through gills, not lungs.', minAge: 5 },
    { text: 'Why did the dolphin smile? It heard a whale joke.', minAge: 8 },
    { text: 'What do you call a happy fish? A glad-fish.', minAge: 6 },
    { text: 'Some fish can change color to hide.', minAge: 5 },
  ],
  bugs: [
    { text: 'A caterpillar turns into a butterfly inside a cocoon.', minAge: 5 },
    { text: 'Bees do a wiggly dance to share directions.', minAge: 6 },
    { text: 'Snails carry their homes on their backs.', minAge: 4 },
    { text: 'Butterflies taste food with their feet.', minAge: 5 },
    { text: 'A honeybee has five eyes in total.', minAge: 7 },
    { text: "What is a bee's favorite class? Spelling-bee.", minAge: 7 },
    { text: 'Why did the snail bring a book? To go slow and read.', minAge: 7 },
    { text: 'Caterpillars have over 4,000 muscles in their body.', minAge: 8 },
  ],
  bears: [
    { text: 'Koalas sleep up to 20 hours each day.', minAge: 5 },
    { text: 'Pandas eat bamboo almost all day long.', minAge: 5 },
    { text: 'Polar bears have black skin under their white fur.', minAge: 6 },
    { text: 'Bears can stand on two legs like people.', minAge: 5 },
    { text: 'Polar bear paws are wider than dinner plates.', minAge: 6 },
    { text: 'What do polar bears wear in winter? Snow caps.', minAge: 6 },
    { text: "Why don't pandas like fast food? They can't catch it.", minAge: 8 },
    { text: 'Koalas are not really bears at all.', minAge: 6 },
  ],
  royal: [
    { text: 'A princess wears a crown to show she is royal.', minAge: 5 },
    { text: 'Old castles had moats to keep enemies out.', minAge: 6 },
    { text: 'Frogs can leap many times their own length.', minAge: 5 },
    { text: 'Crowns are often shaped like a circle of gold.', minAge: 5 },
    { text: 'Castles were homes for kings and queens long ago.', minAge: 6 },
    { text: 'Why was the king tired? He stayed up reigning.', minAge: 8 },
    { text: 'What do you call a royal frog? A prince-hopper.', minAge: 7 },
    { text: 'Some castles had secret tunnels for quick escape.', minAge: 6 },
  ],
  space: [
    { text: 'Rockets fly faster than any car or plane.', minAge: 5 },
    { text: 'A star is a giant ball of glowing gas.', minAge: 7 },
    { text: 'The sun is the closest star to Earth.', minAge: 6 },
    { text: 'Space is mostly silent because there is no air.', minAge: 7 },
    { text: 'Sunlight takes 8 minutes to reach our planet.', minAge: 8 },
    { text: 'Why did the alien bring a ladder? For the high stars.', minAge: 7 },
    { text: 'What do astronauts eat at noon? Launch.', minAge: 7 },
    { text: 'Astronauts float because space has no gravity.', minAge: 7 },
  ],
  plants: [
    { text: 'A tiny seed can grow into a giant tree.', minAge: 4 },
    { text: 'Plants drink water through their roots.', minAge: 5 },
    { text: 'Trees make the air we breathe.', minAge: 5 },
    { text: 'Some flowers open only at night.', minAge: 5 },
    { text: 'Bamboo can grow three feet in one day.', minAge: 7 },
    { text: 'Why are trees good at making friends? They branch out.', minAge: 7 },
    { text: 'What did the tree wear to the pool? Swim trunks.', minAge: 6 },
    { text: 'A herb is a plant used in cooking or healing.', minAge: 6 },
  ],
  sweets: [
    { text: 'Cookies became famous in the Netherlands long ago.', minAge: 7 },
    { text: 'A cupcake is just a small, single-serve cake.', minAge: 5 },
    { text: 'Birthday candles started over 200 years ago.', minAge: 7 },
    { text: 'Frosting can be made from butter and sugar.', minAge: 6 },
    { text: 'Sprinkles come in many shapes and sizes.', minAge: 4 },
    { text: 'Why did the cookie cry? It felt crumb-y.', minAge: 7 },
    { text: 'What does a cupcake wear to parties? Sprinkle pants.', minAge: 6 },
    { text: "The world's biggest cake weighed over 60,000 pounds.", minAge: 8 },
  ],
  weather: [
    { text: 'A rainbow has seven colors, side by side.', minAge: 5 },
    { text: 'Rain falls when clouds get too heavy.', minAge: 5 },
    { text: 'Lightning can be hotter than the sun.', minAge: 7 },
    { text: 'A raindrop is shaped like a hamburger bun.', minAge: 6 },
    { text: 'The sun lights up half the Earth at a time.', minAge: 6 },
    { text: 'What did one rain cloud say? Stay cool.', minAge: 7 },
    { text: 'Why was the rainbow so smart? It had bright ideas.', minAge: 7 },
    { text: 'Snow is rain that froze before it landed.', minAge: 5 },
  ],
  mythic: [
    { text: 'Fairies are tiny magical creatures from stories.', minAge: 4 },
    { text: "A wizard's hat is often pointy and tall.", minAge: 5 },
    { text: 'Crystal balls are said to show the future.', minAge: 6 },
    { text: 'Many wizards in stories have long beards.', minAge: 5 },
    { text: 'A wand is a stick that makes magic happen.', minAge: 5 },
    { text: 'What does a wizard wear in rain? A magic poncho.', minAge: 7 },
    { text: 'Why was the fairy so happy? Life felt sparkly.', minAge: 7 },
    { text: 'Some myths say fairies live inside flowers.', minAge: 6 },
  ],
  robots: [
    { text: 'A satellite circles Earth from way up high.', minAge: 6 },
    { text: 'Robots do jobs that are too hard for people.', minAge: 5 },
    { text: 'Some robots clean floors all by themselves.', minAge: 5 },
    { text: 'A mech is a giant robot you climb inside.', minAge: 6 },
    { text: 'Gears help machines turn and move.', minAge: 5 },
    { text: 'Why was the robot mad? Someone pushed its buttons.', minAge: 7 },
    { text: 'What do robots eat at lunch? Micro-chips.', minAge: 7 },
    { text: 'The word robot comes from a Czech word for worker.', minAge: 8 },
  ],
  vehicles: [
    { text: 'Some race cars go over 200 miles per hour.', minAge: 7 },
    { text: 'Bicycles were first built almost 200 years ago.', minAge: 7 },
    { text: 'A motorbike has only two wheels, like a bike.', minAge: 5 },
    { text: 'Scooters can be pushed or powered by a motor.', minAge: 6 },
    { text: 'Race cars use special tires that grip the road.', minAge: 7 },
    { text: 'Why was the bike tired? It was two-tired.', minAge: 7 },
    { text: 'What do you give a sick scooter? Some rest.', minAge: 6 },
    { text: 'The fastest land car beat the speed of sound.', minAge: 8 },
  ],
  gems: [
    { text: 'Diamonds are the hardest natural thing on Earth.', minAge: 6 },
    { text: 'A trophy is a prize you win for doing great.', minAge: 5 },
    { text: 'Gems form deep underground over millions of years.', minAge: 7 },
    { text: 'Some rings hold gems on the top.', minAge: 5 },
    { text: 'Rubies and emeralds come in red and green.', minAge: 6 },
    { text: 'Why did the rock blush? It saw the river rushing by.', minAge: 7 },
    { text: "What's a gem's favorite music? Rock music.", minAge: 7 },
    { text: 'Pearls grow inside oyster shells under the sea.', minAge: 6 },
  ],
  balls: [
    { text: 'A soccer ball has 32 panels stitched together.', minAge: 7 },
    { text: 'Basketball was invented over 130 years ago.', minAge: 7 },
    { text: 'Footballs are shaped like an egg, not a sphere.', minAge: 6 },
    { text: 'Rugby is a sport played without much padding.', minAge: 6 },
    { text: 'Soccer is the most-played sport in the world.', minAge: 6 },
    { text: 'Why did the ball go to school? To get bouncier.', minAge: 6 },
    { text: "What's a ball's favorite snack? Cheer-ios.", minAge: 7 },
    { text: 'A basketball hoop is 10 feet off the ground.', minAge: 6 },
  ],
  trains: [
    { text: 'Bullet trains zoom faster than 200 miles per hour.', minAge: 7 },
    { text: 'A steam engine burns coal to make it move.', minAge: 6 },
    { text: 'Trams run on tracks through busy city streets.', minAge: 6 },
    { text: 'Some trains carry over 100 cars at once.', minAge: 7 },
    { text: 'A train whistle warns people to stay clear.', minAge: 5 },
    { text: 'Why was the train tired? Long day on track.', minAge: 7 },
    { text: 'What do trains chew? Choo-choo gum.', minAge: 6 },
    { text: 'Subways are trains that run under cities.', minAge: 5 },
  ],
  planes: [
    { text: 'Helicopters can hover in one spot in the sky.', minAge: 6 },
    { text: 'A kite needs wind to stay up in the air.', minAge: 4 },
    { text: 'Hot air balloons float because hot air rises.', minAge: 7 },
    { text: 'Planes use big wings to lift off the ground.', minAge: 5 },
    { text: 'The first airplane flew for only 12 seconds.', minAge: 7 },
    { text: 'Why are pilots calm? They keep their plane steady.', minAge: 8 },
    { text: 'What do you call a flying snack? Plane-cakes.', minAge: 7 },
    { text: 'Kites have been around for over 2,000 years.', minAge: 7 },
  ],
  moons: [
    { text: 'The moon has no light of its own.', minAge: 6 },
    { text: 'A full moon happens about every 29 days.', minAge: 7 },
    { text: 'A new moon looks invisible in the sky.', minAge: 6 },
    { text: 'The moon pulls oceans, making tides rise and fall.', minAge: 7 },
    { text: 'Twelve people have walked on the moon.', minAge: 7 },
    { text: 'Why did the moon go to bed? Tired of cycles.', minAge: 7 },
    { text: 'What did the moon order at dinner? An eclipse.', minAge: 8 },
    { text: 'The moon is about a quarter the size of Earth.', minAge: 7 },
  ],
  sun: [
    { text: 'The sun is a million times bigger than Earth.', minAge: 7 },
    { text: 'Sunlight takes 8 minutes to reach our planet.', minAge: 8 },
    { text: 'Clouds are made of tiny water drops.', minAge: 5 },
    { text: 'The sun gives plants the energy to grow.', minAge: 5 },
    { text: 'Sunshine on your skin makes vitamin D.', minAge: 6 },
    { text: 'Why does the sun go to school? To get brighter.', minAge: 6 },
    { text: 'What did the cloud wear? Thunderwear.', minAge: 8 },
    { text: 'The sun is over four billion years old.', minAge: 8 },
  ],
  stars: [
    { text: 'Stars are like our sun, but very far away.', minAge: 6 },
    { text: 'Some stars are so bright you see them at dusk.', minAge: 6 },
    { text: 'A shooting star is a rock burning up in the sky.', minAge: 7 },
    { text: 'The Big Dipper is a famous group of stars.', minAge: 6 },
    { text: 'Stars twinkle when their light wiggles in the air.', minAge: 7 },
    { text: 'Why are stars happy? They shine all night long.', minAge: 6 },
    { text: "What's a star's favorite sport? Light-ning ball.", minAge: 8 },
    { text: 'Some stars live for billions of years.', minAge: 8 },
  ],
  phoenix: [
    { text: 'A phoenix is a magical bird made of fire.', minAge: 5 },
    { text: 'Old stories say the phoenix is reborn from ash.', minAge: 7 },
    { text: 'An ember is a small piece of glowing wood.', minAge: 6 },
    { text: 'Phoenix stories come from many old cultures.', minAge: 7 },
    { text: 'Fire needs three things: heat, fuel, and air.', minAge: 6 },
    { text: 'Why was the phoenix never cold? It made its own heat.', minAge: 7 },
    { text: 'What did the firebird wear? A fiery flame coat.', minAge: 6 },
    { text: 'Phoenix means bright purple in old Greek.', minAge: 8 },
  ],
  celestial: [
    { text: 'A galaxy has billions of stars inside it.', minAge: 7 },
    { text: 'Comets have long, glowing tails of dust and ice.', minAge: 7 },
    { text: 'Earth lives inside the Milky Way galaxy.', minAge: 6 },
    { text: "Halley's comet returns to Earth every 76 years.", minAge: 8 },
    { text: 'A shooting star is faster than any speeding car.', minAge: 6 },
    { text: "Why is space so quiet? Stars can't talk yet.", minAge: 7 },
    { text: 'What do you say to a comet? See you later.', minAge: 7 },
    { text: 'Galaxies can spin in giant, slow circles.', minAge: 7 },
  ],
  mermaid: [
    { text: 'Coral is a living animal, not a plant.', minAge: 7 },
    { text: 'Mermaids appear in many old sea stories.', minAge: 5 },
    { text: 'A seashell once held a tiny ocean animal.', minAge: 5 },
    { text: 'The ocean covers over 70 percent of Earth.', minAge: 7 },
    { text: 'Coral reefs are home to thousands of fish.', minAge: 6 },
    { text: 'Why are mermaids great singers? They have scales.', minAge: 8 },
    { text: 'What do mermaids drink? Wave-er.', minAge: 7 },
    { text: 'Some shells hold the sound of the ocean inside.', minAge: 5 },
  ],
  ninja: [
    { text: 'Real ninjas trained in secret for many years.', minAge: 7 },
    { text: 'Ninjas wore black to hide in the dark.', minAge: 5 },
    { text: 'A katana is a long sword used by samurai.', minAge: 7 },
    { text: 'Ninjas could climb walls using metal claws.', minAge: 6 },
    { text: 'Many ninja stories come from old Japan.', minAge: 6 },
    { text: 'Why are ninjas good at hide and seek? Practice.', minAge: 7 },
    { text: 'What did the ninja eat for breakfast? Ninja-nut cereal.', minAge: 7 },
    { text: 'Ninjas used smoke bombs to disappear fast.', minAge: 6 },
  ],
}

/**
 * Return facts eligible for a kid of `age`. If `seen` is provided, items
 * already shown this session are filtered out — unless every eligible item
 * has been seen, in which case the full eligible pool is returned (the
 * "seen" set should be cleared by the caller and the rotation resumes).
 */
export function eligibleFacts(
  chainKey: string,
  age: number,
  seen?: ReadonlySet<string>,
): PetChainFact[] {
  const pool = PET_CHAIN_FACTS[chainKey] ?? PET_CHAIN_FACTS.cats
  const eligible = pool.filter((f) => f.minAge <= age)
  if (!seen || seen.size === 0) return eligible
  const fresh = eligible.filter((f) => !seen.has(f.text))
  return fresh.length > 0 ? fresh : eligible
}
