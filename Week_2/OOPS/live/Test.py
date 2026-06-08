from music.string.veena import Veena
from music.wind.saxophone import Saxophone

# a. Create an instance of Veena and call play()
veena = Veena()
veena.play()

# b. Create an instance of Saxophone and call play()
saxophone = Saxophone()
saxophone.play()

# c. Store objects in a Playable-type variable and call play()

playable = Veena()
playable.play()

playable = Saxophone()
playable.play()