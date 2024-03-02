from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout

class root(App):
    def build(self): 
        la=BoxLayout(orientation='vertical')
        lb=Label(text="Hello There")
        la.add_widget(lb)
        return la

if __name__=="__main__":
    root().run()
