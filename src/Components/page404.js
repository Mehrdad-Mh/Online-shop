import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Page404 extends Component {
   
    render() { 
        return (
            <section class="page_404">
	<div class="container">
		<div class="row cc">	
		<div class="col-sm-12 " >
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		گم شدی کسکم؟
		</h3>
		
		<p>اون راهی که دنبالشی رو ما آسفالت کردیم پسر!</p>
		
		<Link to="/" class="link_404">صفحه اصلی</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        );
    }
}
 
export default Page404;