package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Student;
import com.example.Repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    StudentRepo studentRepo ; 

    public Student addStudent(Student student) {
        return studentRepo.save(student);
    }

    public List<Student> getStudents() {
        return studentRepo.findAll();
    }

    public Student getStudentById(int id) {
        return studentRepo.findById(id).orElse(null);
    }

    public void deleteStudentById(int id) { 
        studentRepo.deleteById(id);
    }

    public Student updateStudent(int id , Student updatedStudent) {
        Optional<Student> studentOptional = studentRepo.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get(); 
            student.setName(updatedStudent.getName());
            student.setEmail(updatedStudent.getEmail());
            return studentRepo.save(student) ;
        }
        else return null ;
    }

    public List<Student> searchStudent(String keyword) {
        return studentRepo.searchStudent(keyword);
    }
}
