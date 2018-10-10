/*  1) Количество сотрудников
SELECT Department.Name AS 'Название департамента', COUNT(*) AS 'Количество сотрудников'
FROM Department
Join Employee ON Employee.DepartmentID = Department.ID
GROUP BY Department.Name */

/* 2) Макс количество сотрудников

SELECT Department.Name AS 'Название департамента', COUNT(*) AS 'Количество сотрудников'
FROM Department
Join Employee ON Employee.DepartmentID = Department.ID
GROUP BY Department.Name
HAVING COUNT(*) = 
(
	SELECT MAX(numOfE) 
	FROM 
	(
		SELECT  COUNT(*) AS numOfE
		FROM Department
		Join Employee ON Employee.DepartmentID = Department.ID
		GROUP BY Department.Name) as A
)*/


/* 3) Пожилая сотрудница
SELECT Department.Name, Employee.FName
FROM Department JOIN Employee ON Department.ID = Employee.DepartmentID
WHERE  (Employee.DateOfBirth = (SELECT Min(Employee.DateOfBirth) from Employee WHERE Employee.Sex = 'ж')) */





