import Rest from './Rest.js'

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
				{
					id: 'commit_message',
					type: 'string',
					label: 'Commit Message',
				},
			],
			callback: async (event) => {

				const payloadData = {
				    "branch": this.config.branch,
				    "commit_message": event.options.commit_message,
				    "actions": [
				      {
				        "action": "update",
				        "file_path": event.options.file_path,
				        "content":event.options.content
				      }
				    ]
				  };

				Rest.POST(
					`https://gitlab.com/api/v4/projects/${this.config.project_id}/repository/commits`, 
					payloadData,
					{
						"PRIVATE-TOKEN" : this.config.token,
					}
				);
			},
		},
	})
}
