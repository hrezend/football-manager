# template for "Guess the number" mini-project
# input will come from buttons and an input field
# all output for the game will be printed in the console
import random
import simplegui

# initialize global variables
range_max = 0
secret_numb = 0
input_numb = 0
count = 0

# helper function to start and restart the game
def new_game():
    global count
    global secret_numb
    if(range_max == 100):
        count = 7
        secret_numb = random.randrange(0, 100)
        print 'New game. Range is from 0 to 100'
        print 'Number of remaining guesses is ' + str(count)
        print ''
    elif(range_max == 1000):
        count = 10
        secret_numb = random.randrange(0, 1000)
        print 'New game. Range is from 0 to 1000'   
        print 'Number of remaining guesses is ' + str(count)
        print ''
    else:
        print 'Select a range to play.'
        print ''
        
# define event handlers for control panel
def range100():    
    global range_max
    range_max = 100
    new_game()

def range1000():    
    global range_max
    range_max = 1000
    new_game()
    
def input_guess(guess):
    global count
    if(count == 0):
        print 'No more remaining guesses.'
        print 'The number was ' + str(secret_numb)
        print 'A new game will start!'
        print ''
        new_game()
    elif(int(guess) == secret_numb):
        print 'Guess was ' + str(guess)
        print 'Number of remaining guesses is ' + str(count)        
        print 'Correct!'
        print ''
        new_game()
    elif(int(guess) >= range_max):
        count = count - 1
        print 'Guess was ' + str(guess)        
        print 'Number of remaining guesses is ' + str(count)
        print 'Out of guesses!'
        print ''
        new_game()
    elif(int(guess) > secret_numb):
        count = count - 1
        print 'Guess was ' + str(guess)
        print 'Number of remaining guesses is ' + str(count)
        print 'Lower!'
        print ''
    elif(int(guess) < secret_numb):
        count = count - 1
        print 'Guess was ' + str(guess)        
        print 'Number of remaining guesses is ' + str(count)
        print 'Higher!'
        print ''
    
# create frame    
frame = simplegui.create_frame("Guess The Number", 200, 200)

# register event handlers for control elements and start frame
frame.add_button("Range is [0, 100)", range100, 200)
frame.add_button("Range is [0, 1000)", range1000, 200)
frame.add_input("Enter a Guess:", input_guess, 200)
frame.start()

# call new_game 
new_game()

# always remember to check your completed program against the grading rubric

