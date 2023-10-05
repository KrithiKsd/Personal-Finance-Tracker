package com.example.coder.budget.model;


import com.fasterxml.jackson.annotation.JsonIgnore;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="expense")
public class Expense {

    @Id
    private Long id;

    private Instant expenseDate;

    private String description;

    private String location;

    private Double expenseAmount;


    //many expenses can have one category
    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    User user;

}
