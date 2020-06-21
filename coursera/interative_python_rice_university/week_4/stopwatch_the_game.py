# AUTHOR: https://hrezend.github.io
# template for "Stopwatch: The Game"
# imports
import simplegui

# define global variables
acertos = 0
tentativas = 0
minutos = 0
segundos = 0
horas = 0
ms = 0
stop = 0
message_time = "0:00.0"
message_placar = "0/0"

# define helper function format that converts time
# in tenths of seconds into formatted string A:BC.D
def format(t):
    global ms, segundos, minutos, horas
    if(segundos == 60):
        minutos = minutos + 1
        segundos = 0
    if(minutos == 60):
        horas = horas + 1
        minutos = 0
    if(segundos < 10):
        message_seg = "0" + str(segundos)
    else:
        message_seg = str(segundos)
    if(minutos < 10):
        message_min = "0" + str(minutos)
    else:
        message_min = str(minutos)
    message_complete = message_min + ":" + message_seg + "." + str(ms)
    return message_complete
    
# define event handlers for buttons; "Start", "Stop", "Reset"
def handle_start():
    timer.start()
    global stop
    stop = 0

def handle_stop():
    global stop
    if(stop != 1):
        timer.stop()
        global acertos, tentativas, message_placar
        tentativas = tentativas + 1
        if(ms == 0 and segundos % 10 == 0):
            acertos = acertos + 1
        message_placar = str(acertos) + "/" + str(tentativas)
        stop = 1

def handle_reset():
    timer.stop()
    global ms, segundos, minutos, tentativas, acertos, message_placar, message_time
    tentativas = 0
    acertos = 0
    ms = 0
    segundos = 0
    minutos = 0
    message_time = "0:00.0"
    message_placar = "0/0"

# define event handler for timer with 0.1 sec interval
def increment():
    global ms, segundos, message_time
    message_time = format(segundos)
    ms = ms + 1
    if(ms == 10):
        segundos = segundos + 1
        ms = 0
    
# define draw handler
def draw(canvas):
    canvas.draw_text(message_time, [50, 110], 28, "White")
    canvas.draw_text(message_placar, [10, 180], 20, "Green")
    
# create frame
timer = simplegui.create_timer(100, increment)
frame = simplegui.create_frame("Stopwatch", 200, 200)

# register event handlers
frame.add_button("Start", handle_start, 100)
frame.add_button("Stop", handle_stop, 100)
frame.add_button("Reset", handle_reset, 100)
frame.set_draw_handler(draw)

# start frame
frame.start()
timer.start()

# Please remember to review the grading rubric
