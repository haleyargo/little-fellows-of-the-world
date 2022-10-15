if(document.querySelector('.overlay')){

	const btnToggleOverlay=document.querySelectorAll('.btn_toggle_overlay');

	btnToggleOverlay.forEach(function(b){

		b.addEventListener('click',function(){
			toggleOverlay();
		})
	})

function toggleOverlay(){
    document.querySelector('.overlay').classList.toggle('hidden');
  }

}

// if(document.querySelector('.home')){
// 	const startBtn=document.querySelector('.button1');
// 	startBtn.forEach(function(b){
// 		b.addEventListener('click',function(){
			
// 		})
// 	})
// }







// *{
// 	font-family: montserrat, sans-serif;
// 	font-weight: 400;
// 	font-style: normal;
// 	box-sizing: border-box;
// 	margin: 0;
// }

// :root{
// 	--black: #292929;
// 	--dark-gray: #3D3D3D;
// 	--gray:  #C4C4C4;
// }

// body{
// 	color: white;
// 	height: 100vh;
// }


// .wrapper{
// 	max-width: 25em;
// 	margin: auto;
// 	place-items: center;
// }

// .home{
// 	height: 100vh;
// }

// .front-page{
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// 	background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url("../img/little_fellows_bg.jpg");
// 	background-repeat: no-repeat;
// 	object-position: 50% 50%;
// 	background-size: 100%;
// 	padding: 4rem 3rem;
// 	height: 100vh;
// 	overflow: hidden;
// }

// .front-page img{
// 	height: 1rem;
// }

// .home .site-header, .home .entry-title, .home .site-footer, .home .entry-footer, .front-page header,.site-info,.widget-area{
// 	display: none;
// }

// @media screen and (min-width:40em){

// 	.wrapper{
// 	max-width: 80em;
// }

// 	.grow {
// 	transition: all .2s ease-in-out;
// }

// 	.grow:hover{
// 		transform: scale(1.1);
// 	}
// }

// .home main{
// 	height: auto;
// 	display: grid;
// 	grid-template-columns: 100%;
// 	grid-template-rows: auto auto;
// 	background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url("../img/little_fellows_bg.jpg");
// 	background-repeat: no-repeat;
// 	object-position: 50% 50%;
// 	background-size: 300%;
// 	padding: 4rem 3rem;
// }

// 			@media screen and (min-width:40em){
// 				.home main{
// 					grid-template-columns: 1fr 1fr;
// 					object-position: center top;
// 					background-size: 100%;
// 					height: auto;
// 					padding: 1em 5rem;
// 				}
// 			}

// .home .right{
// 	display: grid;
// }

// 				@media screen and (min-width:40em){
// 					.home .right{
// 					display: grid;
// 					grid-template-rows: auto auto;
// 					height: 100vh;
// 				}
// 				}

// .risd_logo{
// 	position: absolute;
// 	bottom: 0rem;
// 	right: 0rem;
// 	height: 90px;
// }

// .logo img{
// 	height: 30px;
// }

// 				@media screen and (min-width:40em){
					
// 					.logo{
					
// 						top: 3rem;
// 						right: 3rem;
// 				}

// 				}




// 				@media screen and (min-width:40em){
// 					.home figure{
					
// 				}
// 				}


// .home .text{
// 	height: 100%;
// 	color: white;
// 	max-width: 25rem;
// 	display: grid;
// /*	grid-template-rows: auto auto auto;
// */}

// .post_image{
// 	grid-column: 1;
// 	grid-row: 1;
// 	justify-self: start;
// 	height: 2rem;
// }

// .post_image figure{
// 	height: 10rem;
// }

// .home .little_fellows_logo{
// 	width: 100%;
// }



// 	.home .copyright{
// 		position: absolute;
// 		bottom: 1rem;
// 		left: 1rem;
// 		font-size: 8px;
// 		color: var(--gray);
// 		font-style: italic;
// 	}

// 	@media screen and (min-width:40em){
// 		.home .copyright{

// 		}

// 	}

// 				@media screen and (min-width:40em){
// 					.home .text{
// 					height: 100%;
// 					color: white;
// 					display: flex;
// 					flex-direction: column;
// 					grid-template-columns: 100%;
// 					padding: 3rem 6rem 6rem 1rem;
// */					place-items: center;
// 					max-width: 40rem;
// 					grid-column: 1;

// 				}




// 	.home h1,.home h2, .home p,.home button{
// }


// .home .text img{
// 	width: 400px;
// }

// }





// .home h1{
// 	text-transform: uppercase;
// 	font-weight: 700;
// 	font-style: italic;
// 	letter-spacing: 2px;
// 	font-size:2rem;
// 	justify-self: start;
// 	align-self: flex-start;
// }

// .home span{
// 	color: #C4C4C4;
// 	font-size: 18px;
// 	text-transform: capitalize;
// 	letter-spacing: 0px;
// 	justify-self: left;
// }

// .home .text p{
// 	display: none;
// }
// 					@media screen and (min-width:40em){
// 						.home .text p{
// 							display: inherit;}
// 							.home .statue_photo{
// 								display: none;
// 							}
// }

// .home button{
// 	text-transform: uppercase;
// 	background: transparent;
// 	color: white;
// 	border: white 2px solid;
// 	width: auto;
// 	align-self: center;
// 	justify-self: center;
// 	padding: 1rem 2rem;
// }

// 				@media screen and (min-width:40em){

// 					.home button{
// 						align-self: flex-start;
// 						justify-self: flex-start;
// 					}

// 					.home button:hover{
// 						background: white;
// 						color: black;
// 					}
// 				}



// .home button a{
// 	color: inherit;
// 	text-decoration: none;
// }


// 					@media screen and (min-width:40em){
							
// 							main{
// 								grid-template-columns: auto auto;
// 							}

// 					}

// /************** ARTICLE **************/
// .site-main{
// 	background: black;
// 	padding: 2rem;
// 	place-items: center;
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// 	column-gap: 2rem;
// 	height: 100vh;
// }


// .site-main #attachment_36{
// 	align-self: top;
// 	max-width: 30rem;
// 	grid-column: 1;
// }

// .site-main .text{
// 	text-align: right;
// 	align-self: top;
// 	height: 100%;
// 	line-height: 2.5rem;
// 	max-width: 40rem;
// 	grid-column: 2;
// }

// .site-main .text h1{
// 	text-transform: uppercase;
// 	font-weight: 600;
// 	font-style: italic;
// 	font-size: 3em;
// 	letter-spacing: 2px;
// }

// .site-main .text h2{
// 	color: var(--gray);
// 	text-transform: capitalize;
// 	font-weight: 500;
// }

// .site-main .text h3{
// 	color: var(--gray);
// 	text-transform: capitalize;
// 	font-style: italic;
// }

// .site-main .text p{
// 	color: white;
// 	font-size: 12px;
// 	line-height: 25px;
// 	margin-top: 1rem;
// }




// header{
// 	padding: 1rem;
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// 	background: black;
// }

// header img{
// 	height: 20px;
// 	justify-self: right;
// }

// .site-main header i{
// 	color: white;
// 	font-size: 2rem;
// }




// /********** FOOTER **********/


// footer{
// 	width: 100%;
// 	margin: 0;
// 	height: auto;
// 	position: fixed;
// 	bottom: 0;
// 	left: 0;
// 	background: transparent;
// 	display: flex;
// 	align-content: center;
// 	flex-direction: column;
// }

// footer p{
// 	font-style: italic;
// 	color: var(--gray);
// 	font-size: 8px;
// 	letter-spacing: 1px;
// 	height: 100%;
// 	justify-self: center;
// 	grid-row: 2;
// 	align-self: center;
// }

// .article .text_logo{
// 	display: flex;
// 	justify-content: space-between;
// 	padding-right:10px;
// }

// .article .logo{
// 	height: 2rem;
// 	margin: 0;
// 	grid-row: 2;
// }

// .article .logo img{
// 	height: 100%;
// }

// .post-nav{
// 	display: flex;
// 	justify-content: space-between;
// 	font-size: 12px;
// }

// footer li::marker{
// 	visibility: hidden !important;
// }

// .post-nav a{
// 	color: var(--black);
// 	text-transform: uppercase;
// 	font-size: 1rem;
// 	font-weight: 500;
// 	background: gray;
// 	text-decoration: none;
// 	padding: 20px;
// 	width: 100%;
// 	border: 5px solid black;
// 	text-align: center;
// }



// 					@media screen and (min-width:40em){
							
// 							footer{
// 								flex-direction: row-reverse;
// 								justify-content: space-between;
// 								align-content: center;
// 								padding: 1rem;
// 							}

// 							footer p{
// 								height: 100%;
// 								font-size: 11px;
// 								align-self: center;
// 							}

// 							.text_logo{
// 								display: block;
// 								justify-self: left;
// 								align-content: center;
// 								height: 100%;
// 							}

// 							.text_logo p{
// 								padding-left: 1rem;
// 							}

// 							.post-nav{
// 								font-size: 12px;
// 								display: block;
// 								align-self: end;
// 							}

// 							.post-nav a{
// 								color: var(--black);
// 								text-transform: uppercase;
// 								font-size: 1rem;
// 								font-weight: 500;
// 								background: gray;
// 								text-decoration: none;
// 								padding: 20px;
// 								width: 10rem !important;
// 								border: 5px solid black;
// 								text-align: center;
// 							}

// 							.post-nav a:hover{
// 								background: white;
// 							}


// 					}

