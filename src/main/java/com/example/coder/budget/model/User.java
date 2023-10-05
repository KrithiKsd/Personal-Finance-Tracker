package com.example.coder.budget.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="user")
public class User {

    @Id
    private Long id;

    private String name;

    private String email;

    @OneToMany
    private Set<Category> category;

}
