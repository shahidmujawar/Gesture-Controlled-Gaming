def wasd_function():
	#from pynput.keyboard import Key, Controller
	import keyboard
	import eel
	#keyboard = Controller()
	eel.init('./')
	
	@eel.expose
	def pressBtnW():	# Use Acceleration
		
		keyboard.release('space')
		keyboard.release('d')
		keyboard.release('a')
		keyboard.release('s')

		keyboard.press('w')
	
	@eel.expose
	def pressBtnA():	# Trun Left

		keyboard.release('space')
		keyboard.release('d')
		keyboard.release('w')
		keyboard.release('s')

		keyboard.press('a')
		
	@eel.expose
	def pressBtnD():	# Turn Right
		
		keyboard.release('space')
		keyboard.release('a')
		keyboard.release('w')
		keyboard.release('s')

		keyboard.press('d')
	
	@eel.expose
	def pressBtnS():	# Use Reverse Gear
		
		keyboard.release('space')
		keyboard.release('a')
		keyboard.release('d')
		keyboard.release('w')

		keyboard.press('s')

	@eel.expose
	def doNothing():	#  use handbreak
		keyboard.release('a')
		keyboard.release('d')
		keyboard.release('w')
		keyboard.release('s')
		keyboard.press('space')
		
	eel.start('index.html',size=(1080,720))
