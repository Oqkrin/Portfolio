use std::{rc::Rc, cell::RefCell,};

use stylist::{Style, yew::styled_component};
use wasm_bindgen::JsCast;
use yew::{prelude::*};
use web_sys::{HtmlHeadingElement, MouseEvent};
use gloo::timers::callback::Interval;


const ANANKE: &str = "ANANKE";
const LETTERS: &str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

#[styled_component(App)]
pub fn app() -> Html {
    
    let ananke = use_state(|| ANANKE.to_string());
    
    let cloned_ananke = ananke.clone();

    let onmouseover: Callback<MouseEvent> = Callback::from(move |event:  MouseEvent| {

        let double_cloned_ananke = cloned_ananke.clone();
        
        let interval = Interval::new(1,move || {
            //double_cloned_ananke.set(format!("{}!", event.target().unwrap().unchecked_into::<HtmlHeadingElement>().inner_text()));
            double_cloned_ananke.set("!".to_string());
        });
        
        
    });

    html! {
        <div class={Style::new(include_str!("css/Title.css")).unwrap()}>
            <h1 onmouseover={onmouseover}>{&*ananke}</h1>
        </div>
    }
} 
