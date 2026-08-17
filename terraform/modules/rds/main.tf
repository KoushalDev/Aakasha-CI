resource "aws_db_subnet_group" "this" {
  name = "${var.environment}-aakasha-db-subnet-group"

  subnet_ids = var.db_subnet_ids

  tags = {
    Name        = "${var.environment}-aakasha-db-subnet-group"
    Environment = var.environment
  }
}


resource "aws_security_group" "this" {
  name        = "${var.environment}-aakasha-rds-sg"
  description = "Security group for Aakasha RDS MySQL"
  vpc_id      = var.vpc_id

  ingress {
    description     = "MySQL from EKS"
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = var.allowed_security_group_ids
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.environment}-aakasha-rds-sg"
    Environment = var.environment
  }
}


resource "aws_db_instance" "this" {
  identifier = "${var.environment}-aakasha-mysql"

  engine         = "mysql"
  engine_version = "8.0"

  instance_class = var.db_instance_class

  allocated_storage     = 20
  max_allocated_storage = 100
  storage_type          = "gp3"
  storage_encrypted     = true

  db_name  = var.db_name
  username = var.db_username
  password = var.db_password
  port     = 3306

  db_subnet_group_name = aws_db_subnet_group.this.name

  vpc_security_group_ids = [
    aws_security_group.this.id
  ]

  backup_retention_period = 7

  backup_window = "03:00-04:00"

  maintenance_window = "sun:04:00-sun:05:00"

  multi_az = true

  publicly_accessible = false

  deletion_protection = true

  skip_final_snapshot = false

  final_snapshot_identifier = "${var.environment}-aakasha-final-snapshot"

  auto_minor_version_upgrade = true

  tags = {
    Name        = "${var.environment}-aakasha-mysql"
    Environment = var.environment
  }
}
