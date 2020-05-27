# Rock-paper-scissors-lizard-Spock solution
#http://www.codeskulptor.org/#user47_m1gwOXkiEk_5.py
import random

# functions define
def name_to_number(name):
    if name == 'rock':
        number = 0
    elif name == 'Spock':
        number = 1
    elif name == 'paper':
        number = 2
    elif name == 'lizard':
        number = 3
    elif name == 'scissors':
        number = 4
    return number

def number_to_name(number):
    if number == 0:
        name = 'rock'
    elif number == 1:
        name = 'Spock'
    elif number == 2:
        name = 'paper'
    elif number == 3:
        name = 'lizard'
    elif number == 4:
        name = 'scissors'
    return name
        
def rpsls(player_choice):
    #player choice
    print 'Player chooses ' + player_choice
    player = name_to_number(player_choice)
    
    #computer random choice
    computer = random.randrange(0,5)
    computer_choice = number_to_name(computer)
    print 'Computer chooses ' + computer_choice
    
    #algorithm to find the winner
    diff = (player - computer) % 5
    if diff == 1 or diff == 2:
        print "Player wins!"
    elif diff == 3 or diff == 4:
        print "Computer wins!"
    else:
        print "Player and computer tie!"
        
    #print endline    
    print
    

#Tests
rpsls("rock")
rpsls("Spock")
rpsls("paper")
rpsls("lizard")
rpsls("scissors")
