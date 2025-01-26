# Dependency Injection

## What is Dependency Injection?
Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control). It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways.

## Benefits of Dependency Injection
- **Decoupling**: Reduces the dependency between classes.
- **Maintainability**: Easier to manage and update code.
- **Testability**: Simplifies unit testing by allowing mock dependencies.

## Types of Dependency Injection
1. **Constructor Injection**: Dependencies are provided through a class constructor.
2. **Setter Injection**: Dependencies are provided through setter methods.
3. **Interface Injection**: The dependency provides an injector method that will inject the dependency into any client passed to it.

## Difference Between Couplage Faible and Couplage Fort
- **Couplage Faible (Loose Coupling)**: Refers to a design where components are minimally dependent on each other. This makes the system more modular, easier to maintain, and test.
- **Couplage Fort (Tight Coupling)**: Refers to a design where components are highly dependent on each other. This can make the system more difficult to maintain and test.

## Static Instantiation vs Dynamic Instantiation
- **Static Instantiation**: Objects are created at compile-time. This can lead to less flexible code as dependencies are hardcoded.
- **Dynamic Instantiation**: Objects are created at runtime. This allows for more flexible and adaptable code as dependencies can be injected dynamically.

## Example in Java

### Constructor Injection
```java
public class Service {
    private Repository repository;

    public Service(Repository repository) {
        this.repository = repository;
    }

    // other methods
}
```

### Setter Injection
```java
public class Service {
    private Repository repository;

    public void setRepository(Repository repository) {
        this.repository = repository;
    }

    // other methods
}
```

### Using a DI Framework (Spring)
```java
@Service
public class Service {
    private final Repository repository;

    @Autowired
    public Service(Repository repository) {
        this.repository = repository;
    }

    // other methods
}
```

## Conclusion
Dependency Injection is a powerful technique that enhances the modularity and testability of your code. By using DI, you can create more flexible and maintainable applications.
