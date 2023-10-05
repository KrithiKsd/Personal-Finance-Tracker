package com.example.coder.budget.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@NoArgsConstructor
@Data
@Entity
@Table(name="category")
public class Category {

    @Id
    private Long id;

    @NonNull
    private String name;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;
}
