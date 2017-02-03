export namespace Todoist {

  export interface Item {
    content: string;
    meta_data?: any;
    user_id: number;
    task_id: number;
    project_id: number;
    completed_date: string;
    id: number;
  }

  export interface ProjectData {
    name: string;
    color: number;
    collapsed: number;
    inbox_project: boolean;
    parent_id?: any;
    item_order: number;
    indent: number;
    id: number;
    is_deleted: number;
    is_archived: number;
  }

  export interface Projects {
    193815246: ProjectData;
  }

  export interface Base {
    items: Item[];
    projects: Projects;
  }
}
