module.exports = function (self) {
	self.setActionDefinitions({
		sample_action: {
			name: 'Update file',
			options: [
				{
					id: 'file_path',
					type: 'string',
					label: 'File Path',
				},
				{
					id: 'content',
					type: 'string',
					label: 'New contents',
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.num)
			},
		},
	})
}
