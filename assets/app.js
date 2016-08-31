// Discourse.TopicView.reopen({
// 	didInsertElement : function(){
// 		this._super();
// 		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
// 	},
// 	afterRenderEvent : function(){
// 		var btn = document.createElement('li');
// 		btn.setAttribute('id','947');
// 		btn.setAttribute('class','ember-view');
// 		btn.setAttribute('title','Toggle btn');

// 		var btnlink = document.createElement('a');
// 		btnlink.setAttribute('href','#');
// 		btnlink.setAttribute('onclick',"if(document.getElementsByClassName('d-header')[0].style.display == 'none'){document.getElementsByClassName('d-header')[0].style.display = 'inherit'; document.getElementById('main-outlet').style['padding-top'] = '82px';} else {document.getElementsByClassName('d-header')[0].style.display = 'none'; document.getElementById('main-outlet').style['padding-top'] = '22px';}");

// 		var newtext = document.createTextNode('Toggle Nav');
// 		btnlink.appendChild(newtext);
// 		btn.appendChild(btnlink);


// 		setTimeout(function(){
// 			document.getElementById('ember917').appendChild(btn);
// 		}, 3000);

// 		function togglenav(){
// 			document.getElementsByClassName('d-header').style.display = 'visible';
// 		};
// 		console.log('This is a sample Plugin');
// 	}
// });


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

// Discourse.TopicView.reopen({
// 	didInsertElement : function(){
// 		this._super();
// 		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
// 	},
// 	afterRenderEvent : function(){
// 		console.log('inside discourse topicview');
// 		document.getElementsByTagName('html')[0].style['overflow-y'] = 'hidden'
// 		document.getElementsByTagName('html')[0].style['background-color'] = '#FCFCFC'
// 		document.getElementsByClassName('d-header')[0].style['background-color'] = "#FCFCFC"
// 		document.getElementsByClassName('d-header')[0].style['box-shadow'] = 'none'
// 		document.getElementsByClassName('d-header')[0].getElementsByClassName('title')[0].style['display']='none'
// 	}
// });

(function(){
setTimeout(function(){
	console.log('this is the dom');
	document.getElementsByTagName('html')[0].style['overflow-y'] = 'hidden';
	document.getElementsByTagName('html')[0].style['background-color'] = '#FCFCFC';
	document.getElementsByClassName('d-header')[0].style['background-color'] = "#FCFCFC";
	document.getElementsByClassName('d-header')[0].style['box-shadow'] = 'none';
	document.getElementsByClassName('d-header')[0].getElementsByClassName('title')[0].style['display']='none';
},5000);
})();

// setTimeout(function(){
// 	console.log('this is the dom');
// 	document.getElementsByTagName('html')[0].style['overflow-y'] = 'hidden';
// 	document.getElementsByTagName('html')[0].style['background-color'] = '#FCFCFC';
// 	document.getElementsByClassName('d-header')[0].style['background-color'] = "#FCFCFC";
// 	document.getElementsByClassName('d-header')[0].style['box-shadow'] = 'none';
// 	document.getElementsByClassName('d-header')[0].getElementsByClassName('title')[0].style['display']='none';
// },5000);