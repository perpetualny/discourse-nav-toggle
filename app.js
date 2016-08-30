Discourse.TopicView.reopen({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : function(){
		var btn = document.createElement('li');
		btn.setAttribute('id','947');
		btn.setAttribute('class','ember-view');
		btn.setAttribute('title','Toggle btn');

		var btnlink = document.createElement('a');
		btnlink.setAttribute('href','#');
		btnlink.setAttribute('onclick',"if(document.getElementsByClassName('d-header')[0].style.display == 'none'){document.getElementsByClassName('d-header')[0].style.display = 'inherit'; document.getElementById('main-outlet').style['padding-top'] = '82px';} else {document.getElementsByClassName('d-header')[0].style.display = 'none'; document.getElementById('main-outlet').style['padding-top'] = '22px';}");

		var newtext = document.createTextNode('Toggle Nav');
		btnlink.appendChild(newtext);
		btn.appendChild(btnlink);


		setTimeout(function(){
			document.getElementById('ember917').appendChild(btn);
		}, 3000);

		function togglenav(){
			document.getElementsByClassName('d-header').style.display = 'visible';
		};
	}
});


// var btn = document.createElement('li');
// btn.setAttribute('id','947');
// btn.setAttribute('class','ember-view');
// btn.setAttribute('title','Toggle btn');

// var btnlink = document.createElement('a');
// btnlink.setAttribute('href','#');
// btnlink.setAttribute('onclick',"if(document.getElementsByClassName('d-header')[0].style.display == 'none'){document.getElementsByClassName('d-header')[0].style.display = 'inherit'; document.getElementById('main-outlet').style['padding-top'] = '82px';} else {document.getElementsByClassName('d-header')[0].style.display = 'none'; document.getElementById('main-outlet').style['padding-top'] = '22px';}");

// var newtext = document.createTextNode('Toggle Nav');
// btnlink.appendChild(newtext);
// btn.appendChild(btnlink);


// setTimeout(function(){
// 	document.getElementById('ember917').appendChild(btn);
// }, 3000);

// function togglenav(){
// 	document.getElementsByClassName('d-header').style.display = 'visible';
// };

