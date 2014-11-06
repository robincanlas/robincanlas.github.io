define([
	'app',
	'text!components/modal/templates/layout.html',
], function(App, LayoutTemplate){

	App.module('Components.Modal', function(Modal, App, Backbone, Marionette, $, _){
	
		Modal.Layout = Marionette.LayoutView.extend({
			defaults: {
				width: '320',
				transition: 'modal-stick-top'
			},
			className: 'border-radius-2',
			template: LayoutTemplate,
			regions: {
				modalHeader: '#modal-header',
				modalContent: '#modal-content',
				modalFooter: '#modal-footer',
			},
			events: {
				'click [data-close]':'transitionOut',
				'click [data-save]':'onSave',
				'click [data-remove]': 'onRemove',
				'click [data-pay]': 'onPay',
				'click [data-refund]': 'onRefund'
			},

			// Merges passed options with default options
			initialize: function(options){
				// this.model = options.options.model;
				this.options = _.defaults(options, this.defaults);
				// if ( _.isUndefined(this.model) ) {

				// } else if ( this.model.get('header_type') === 'save' ) {
				// 	this.options.width = 500;
				// 	this.options.transition = 'modal-stick-top';
				// }
			},

			onRender: function(){
				// Dynamically sets width based on options
				// Todo: Add more options to customize
				//  if ( this.options.width === 500 ) {
				// 	this.$('.modal-wrapper')
				// 		.addClass(this.options.transition)
				// 		.css({
				// 			'max-width':this.options.width+'px'
				// 		});
				// } else {
					this.$('.modal-wrapper')
					.addClass(this.options.transition)
					.css({
						'margin-left':'-'+this.options.width/2+'px',
						'max-width':this.options.width+'px'
					});
				// }
				// Adds transition effects
				_.defer(_.bind(this.transitionIn, this)); 
			},

			transitionIn: function(){
				this.$('.modal-wrapper').addClass('modal-show');
			},

			transitionOut: function(){
				this.$('.modal-wrapper').removeClass('modal-show');
				this.trigger('modal:escape');
			},

			onSave: function(){
				this.trigger('modal:save');
				this.transitionOut();
			},

			onRemove: function(){
				this.trigger('modal:remove');
				this.transitionOut();	
			},

			onPay: function(){
				this.action = 'pay';
				this.trigger('modal:update', this.action);
				this.transitionOut();
			},

			onRefund: function(){
				this.action = 'refund';
				this.trigger('modal:update', this.action);
				this.transitionOut();
			}
		});

		Modal.Header = Marionette.ItemView.extend({
			getTemplate: function(){
				return _.template('header <span data-close class="cursor-pointer right">x</span>')
			},
		});

		Modal.Footer = Marionette.ItemView.extend({
			className: 'padding-10',
			template: _.template('<%=reserved()%><%=paid()%><button data-close class="padding-10">Cancel</button>'),
			templateHelpers: {
				paid: function(){
					if(this.isReserved){
						if(this.isPaid){
							return '<button data-refund class="padding-10 margin-0-20">Refund!</button>'
						}else{
							return '<button data-pay class="padding-10 margin-0-20">Pay now!</button>'
						}
					}else{
						return ''
					}
				},
				reserved: function(){
					return this.isReserved ? '<button class="padding-10" data-remove>Remove</button>' : '<button data-save class="padding-10 margin-0-20">Reserve now!</button>';
				}
			},
			modelEvents: {
				'change:isPaid': 'render'
			}

		});

	});

	return App.Components.Modal;
});