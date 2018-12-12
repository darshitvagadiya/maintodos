export class Todo {
	id: number;
	text: string;
	description: string;
	completed: boolean;
	created_at: Date;
	edited_at: Date;

	constructor(id: number, text: string, description: string, completed: boolean, created_at: Date, edited_at: Date){
		this.id = id;
		this.text = text;
		this.description = description;
		this.completed = completed;
		this.created_at = created_at;
		this.edited_at = edited_at;
	}
}
