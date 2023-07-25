import { Comment } from "./Comment.mjs";
import { Student } from "./Student.mjs";

// export class TeacherStudent extends Student {
  
//     skills = [];

//     constructor(props, skills){
//         super(props);
//         this.skills = skills;
//     }

//     publicarComentario(commentContent) {
//         const comment = new Comment({
//           content: commentContent,
//           studentName: this.name,
//           studentRole: 'profesor de ' + this.skills.join(",")
//         });
//         return comment.publicar();
//     }

// }

export class TeacherStudent extends Student {
  
    skills = [];

    constructor(props, skills){
        super(props);
        this.skills = skills;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
          content: commentContent,
          studentName: this.name,
          studentRole: 'profesor de ' + this.skills.join(",")
        });

        Comment.prototype.teacherSkills = this.skills;
        Comment.prototype.publicar= function () {
            
                const comentario = {
                  studentName: 
                  this.studentRole == 'profesor' 
                  ? this.studentName + " (" + this.studentRole + " de " + this.skills.join(",") + ")"
                  : this.studentName + " (" + this.studentRole + ")",
                  likes: this.likes + " likes",
                  content: this.content
                }
                return comentario
            
        }

        return comment.publicar();
    }

}


var test = new TeacherStudent({ name: 'Juan Manuel', username : 'neyron'}, ['C#', 'VBA', 'VB', 'CSS', 'HTML', 'JS', 'JAVA', 'PHP', 'FULLSTACK DEVELOPER']);
console.log(test.publicarComentario('Vamos con toda'));