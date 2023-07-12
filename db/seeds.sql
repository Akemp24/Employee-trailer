INSERT INTO department (id, department_name)
VALUES  (1, 'Elemental'),
        (2, 'Liquid Chromatography'),
        (3, 'Biology'),
        (4, 'Chemistry');

INSERT INTO role (id, title, department, salary)
VALUES  (1, 'supervisor', 'Elemental', '50000'),
        (2, 'lab tech', 'Liquid Chromatography', '40000'),
        (3, 'lab director', 'Biology', '100000'),
        (4, 'CEO', 'Chemistry', '200000');

INSERT INTO employee (id, first_name, last_name, job_title, department, salary, managers, role_id)
VALUES  (1, 'Savannah', 'Brighton', 'supervisor', 'Elemental', '50000', 'Marcus Brown', '1'),
        (2, 'Asia', 'Kemp', 'lab tech', 'Liquid Chromatography', '40000', 'Savannah Brighton', '2'),
        (3, 'Destiny', 'Balk', 'lab director', 'Biology', '100000', 'Bob Pancake', '3'),
        (4, 'Bob', 'Pancake', 'CEO', 'Chemistry', '200000', 'n/a', '4');