def arrow_function():
	#from pynput.keyboard import Key, Controller
	import keyboard
	import eel
	#keyboard = Controller()
	eel.init('./')
	@eel.expose
	def pressBtnW():
		
		keyboard.release('space')
		keyboard.release('right')
		keyboard.release('left')
		keyboard.release('down')
					
		keyboard.press('up')
		
	@eel.expose
	def pressBtnA():

		keyboard.release('space')
		keyboard.release('right')
		keyboard.release('up')
		keyboard.release('down')

		keyboard.press('left')		
		
		
	@eel.expose
	def pressBtnD():
		
		keyboard.release('space')
		keyboard.release('left')
		keyboard.release('up')
		keyboard.release('down')

		keyboard.press('right')		

	@eel.expose
	def pressBtnS():
		
		keyboard.release('space')
		keyboard.release('left')
		keyboard.release('right')
		keyboard.release('up')

		keyboard.press('down')


	@eel.expose
	def doNothing():
		keyboard.release('left')
		keyboard.release('right')
		keyboard.release('up')
		keyboard.release('down')

		keyboard.press('space')
		
	eel.start('index.html',size=(720,720))

